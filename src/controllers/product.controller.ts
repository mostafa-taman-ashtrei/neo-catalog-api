import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const relatedRecords = {
    product_type: true,
    product_attributes: true,
    manufacturer: true,
    tax: true,
    discount: true,
    category: true,
    reviews: true,
    tags: true,
};

export const getAllProducts = async (_: Request, res: Response) => {
    try {
        const data = await prisma.product.findMany({
            include: relatedRecords,
        });

        console.log(data);
        return res.status(200).json({ products: data });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ err: 'Server Error!' });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const data = await prisma.product.findUnique({
            where: { id: Number(req.params.id) },
            include: relatedRecords,
        });

        console.log(data);
        return res.status(200).json({ products: data });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ err: 'Server Error!' });
    }
};
