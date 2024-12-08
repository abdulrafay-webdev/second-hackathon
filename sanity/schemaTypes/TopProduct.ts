export const TopProducts = {
    name: 'TopProducts',
    title: 'TopProducts',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Title',
        type: 'string',
      },
      {
        name: 'Price',
        title: 'Regular Price',
        type: 'number',
      },
      {
        name: 'Liter',
        title: 'Liter',
        type: 'text',
      },
      {
        name: 'LongDescription',
        title: 'Long Description',
        type: 'text',
      },
      {
        name: 'ProductImage',
        title:'Image',
        type: 'image', // Ensure this is 'image'
        options: { hotspot: true }, // Optional
      }
    ],
  }