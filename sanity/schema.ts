import { type SchemaTypeDefinition } from 'sanity';

import navigation from './schemas/navigation';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigation],
};

export default schema;
