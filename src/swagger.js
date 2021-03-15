module.exports = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Rest API",
  },
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
  tags: [
    {
      name: "Auth",
    },
    { name: "Posts" },
  ],
  paths: {
    "/auth/register": {
      post: {
        tags: ["Auth"],
        description: "Create user",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateUser",
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "New users were created",
            content: {
              "application/json": {},
            },
          },
          400: {
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Auth"],
        description: "Create user",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            content: {
              "application/json": {},
            },
          },
          400: {
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
    "/posts": {
      get: {
        tags: ["Posts"],
        description: "Get all posts.",
        parameters: [],
        responses: {
          201: {
            content: {
              "application/json": {},
            },
          },
          400: {
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
    "/posts/{post_id}": {
      get: {
        tags: ["Posts"],
        description: "Get post by id.",
        parameters: [
          {
            name: "post_id",
            in: "path",
            schema: {
              type: "integer",
            },
            required: true,
          },
        ],
        responses: {
          200: {
            content: {
              "application/json": {},
            },
          },
          400: {
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
    "/posts/create": {
      post: {
        tags: ["Posts"],
        description: "Get all posts.",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreatePost",
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            content: {
              "application/json": {},
            },
          },
          400: {
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
    "/posts/update": {
      patch: {
        tags: ["Posts"],
        description: "update post.",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdatePost",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            content: {
              "application/json": {},
            },
          },
          400: {
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
    "/posts/delete/{post_id}": {
      delete: {
        tags: ["Posts"],
        description: "delete post by id.",
        parameters: [
          {
            name: "post_id",
            in: "path",
            schema: {
              type: "integer",
            },
            required: true,
          },
        ],
        responses: {
          201: {
            content: {
              "application/json": {},
            },
          },
          400: {
            content: {
              "application/json": {},
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      identificationNumber: {
        type: "integer",
        description: "User identification number",
        example: 1234,
      },
      string: {
        type: "string",
      },
      Login: {
        type: "object",
        properties: {
          email: {
            $ref: "#/components/schemas/string",
          },
          password: {
            $ref: "#/components/schemas/string",
          },
        },
      },
      CreateUser: {
        type: "object",
        properties: {
          email: {
            $ref: "#/components/schemas/string",
          },
          password: {
            $ref: "#/components/schemas/string",
          },
          first_name: {
            $ref: "#/components/schemas/string",
          },
          last_name: {
            $ref: "#/components/schemas/string",
          },
        },
      },
      GetUser: {
        type: "object",
        properties: {
          id: {
            $ref: "#/components/schemas/identificationNumber",
          },
          email: {
            $ref: "#/components/schemas/string",
          },
          password: {
            $ref: "#/components/schemas/string",
          },
          first_name: {
            $ref: "#/components/schemas/string",
          },
          last_name: {
            $ref: "#/components/schemas/string",
          },
        },
      },
      CreatePost: {
        type: "object",
        properties: {
          title: {
            $ref: "#/components/schemas/string",
          },
          message: {
            $ref: "#/components/schemas/string",
          },
        },
      },
      UpdatePost: {
        type: "object",
        properties: {
          post_id: {
            $ref: "#/components/schemas/identificationNumber",
          },
          title: {
            $ref: "#/components/schemas/string",
          },
          message: {
            $ref: "#/components/schemas/string",
          },
        },
      },
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
      },
    },
  },
};
