export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
