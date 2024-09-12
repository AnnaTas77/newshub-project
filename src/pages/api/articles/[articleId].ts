import type { NextApiRequest, NextApiResponse } from "next";
import Article from "../../../../db/models/Article";

type ResponseData = {
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
};

type ErrorMessage = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ErrorMessage>
) {
  try {
    if (req.method === "GET") {
      const { articleId } = req.query;

      if (typeof articleId !== "string") {
        return res.status(400).json({ message: "Invalid article ID." });
      }

      const article = await Article.findByPk(articleId);

      if (!article) {
        return res.status(400).json({ message: "Article not found." });
      }

      return res.status(200).json(article);
    }

    if (req.method === "PUT") {
      const { articleId } = req.query;
      const editedArticle = req.body;

      await Article.update(editedArticle, {
        where: { id: articleId },
      });

      return res.status(200).json({ message: "Article updated successfully." });
    }
  } catch (error: any) {
    console.error("Error fetching article:", error.message);
    res.status(500).json({ message: "Internal Server Error." });
  }
}
