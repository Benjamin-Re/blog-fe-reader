import { PactV3, MatchersV3 } from "@pact-foundation/pact";
import { listPosts, getPostById } from "./posts";

const { eachLike, like } = MatchersV3;

const pact = new PactV3({
  consumer: "blog-fe-reader",
  provider: "blog-api",
});

describe("GET /posts", () => {
  it("returns a list of posts", () => {
    pact
      .uponReceiving("a request for all posts")
      .withRequest({ method: "GET", path: "/posts" })
      .willRespondWith({
        status: 200,
        body: eachLike({
          id: like(1),
          title: like("My Post"),
          content: like("My Content"),
          timestamp: like("2026-01-01T00:00:00Z"),
        }),
      });
    return pact.executeTest(async (mockServer) => {
      vi.stubEnv("VITE_BASE_URL", mockServer.url);
      const posts = await listPosts();
      expect(posts).toHaveLength(1);
      expect(posts[0]).toMatchObject({
        id: 1,
        title: "My Post",
        content: "My Content",
        timestamp: "2026-01-01T00:00:00Z",
      });
    });
  });
});

describe("GET /posts/${id}", () => {
  it("returns one posts based on id", () => {
    pact
      .uponReceiving("a request for one post")
      .withRequest({ method: "GET", path: `/posts/1` })
      .willRespondWith({
        status: 200,
        body: like({
          post: {
            id: like(1),
            title: like("My Post"),
            content: like("My Content"),
            timestamp: like("2026-01-01T00:00:00Z"),
          },
        }),
      });
    return pact.executeTest(async (mockServer) => {
      vi.stubEnv("VITE_BASE_URL", mockServer.url);
      const post = await getPostById(1);
      expect(post.post).toMatchObject({
        id: 1,
        title: "My Post",
        content: "My Content",
        timestamp: "2026-01-01T00:00:00Z",
      });
    });
  });
});
