export default {
    name: "comment",
    title: "Comment",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "content",
        title: "Content",
        type: "text",
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DD",
          timeFormat: "HH:mm",
        },
        initialValue: () => new Date().toISOString(),
      },
      {
        name: "blog",
        title: "Blog Post",
        type: "reference",
        to: [{ type: "blog" }],
      },
    ],
  };
  