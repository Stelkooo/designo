import { type SchemaTypeDefinition } from 'sanity';

import navigation from './schemas/navigation';
import designTypes from './schemas/design-types';
import value from './schemas/value';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigation, designTypes, value],
};

export default schema;
