import { execSync } from "node:child_process";
import { describe, expect, beforeEach, it, afterAll } from "@jest/globals";

import { createMocks, RequestMethod } from "node-mocks-http";
import type { NextApiRequest, NextApiResponse } from "next";
import handler from "src/pages/api/articles";

beforeEach(() => {
  execSync("npm run seed");
});

afterAll(() => {
  execSync("npm run seed");
});

// the function below creates a mock HTTP request and response with a specified method (defaulting to GET) and sets the request's content type to JSON
function mockRequestResponse(method: RequestMethod = "GET") {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse | any } =
    createMocks({ method });

  req.headers = { "Content-Type": "application/json" };

  return { req, res };
}

describe("GET /articles", () => {
  it("returns a list of articles", async () => {
    const { req, res } = mockRequestResponse();
    await handler(req, res);

    // console.log(res);
    // console.log(res._getJSONData());
    const articlesData = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(articlesData.length).toBe(16);
    expect(articlesData).toEqual(
      articlesData.map(() =>
        expect.objectContaining({
          title: expect.any(String),
          content: expect.any(String),
          author: expect.any(String),
          category: expect.any(String),
          image: expect.any(String),
        })
      )
    );
  });
});

describe("POST /articles", () => {
  it("creates a new article", async () => {
    const { req, res } = mockRequestResponse("POST");
    const testArticle = {
      title: "Test Title",
      content: "<p>Test content</p>",
      author: "Test Author",
      category: "culture",
      image: "test.jpg",
    };

    req.body = testArticle;

    await handler(req, res);

    const createdArticle = res._getJSONData();

    expect(res.statusCode).toBe(201);
    expect(createdArticle.id).toBe(17);
    expect(createdArticle).toEqual(expect.objectContaining(testArticle));
  });

  it("returns a 400 status code for missing title", async () => {
    const { req, res } = mockRequestResponse("POST");
    const invalidArticle = {
      content: "<p>Test content</p>",
      author: "Test Author",
      category: "culture",
      image: "test.jpg",
    };

    req.body = invalidArticle;

    await handler(req, res);

    const response = res._getJSONData();
    expect(res.statusCode).toBe(400);
    expect(response).toMatchObject({ message: "Title is required." });
  });
});
