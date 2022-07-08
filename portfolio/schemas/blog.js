export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
              dateFormat: 'DD-MM-YYYY',
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        }
    ]
}