import type { NextApiRequest, NextApiResponse } from "next";
import Article from "../../../db/models/Article";

type ResponseData = {
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
};

type errorMessage = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[] | ResponseData | errorMessage>
) {
  try {
    if (req.method === "GET") {
      const articles = await Article.findAll();
      if (!articles.length) {
        return res.status(404).json({ message: "No articles found." });
      }
      res.status(200).json(articles);
    }

    if (req.method === "POST") {
      const requiredFields = [
        "category",
        "title",
        "author",
        "content",
        "image",
      ];

      const newArticle = req.body;

      // Validate the new article data
      for (const field of requiredFields) {
        if (!newArticle.hasOwnProperty(field)) {
          return res.status(400).json({
            message: `${
              field.charAt(0).toUpperCase() + field.slice(1)
            } is required.`,
          });
        }
      }

      const createdArticle = await Article.create(newArticle);
      res.status(201).json(createdArticle);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
}
