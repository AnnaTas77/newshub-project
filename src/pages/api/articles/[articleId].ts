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
      const requiredFields = [
        "category",
        "title",
        "author",
        "content",
        "image",
      ];

      const { articleId } = req.query;
      const editedArticle = req.body;

      // Validation of the data
      for (const field of requiredFields) {
        if (!editedArticle.hasOwnProperty(field)) {
          return res.status(400).json({
            message: `${
              field.charAt(0).toUpperCase() + field.slice(1)
            } is required.`,
          });
        }
      }

      await Article.update(editedArticle, {
        where: { id: articleId },
      });

      return res.status(200).json({ message: "Article updated successfully." });
    }

    if (req.method === "DELETE") {
      const { articleId } = req.query;

      // Check if articleId is a string to fix TS error
      if (typeof articleId !== "string") {
        return res.status(400).json({ message: "Invalid article ID." });
      }

      const articleToDelete = await Article.findByPk(articleId);

      if (!articleToDelete) {
        return res.status(404).json({ message: "Article not found." });
      }

      await articleToDelete.destroy();
      return res.status(204).end();
    }
  } catch (error: any) {
    console.error("Error fetching article:", error.message);
    res.status(500).json({ message: "Internal Server Error." });
  }
}
