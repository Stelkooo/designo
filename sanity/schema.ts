import { type SchemaTypeDefinition } from 'sanity';

import navigation from './schemas/navigation';
import designTypes from './schemas/design-types';
import value from './schemas/value';
import design from './schemas/design';
import location from './schemas/location';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigation, designTypes, value, design, location],
};

export default schema;
