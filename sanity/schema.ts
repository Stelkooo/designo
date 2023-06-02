import { type SchemaTypeDefinition } from 'sanity';

import navigation from './schemas/navigation';
import designTypes from './schemas/design-types';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigation, designTypes],
};

export default schema;
