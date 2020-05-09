import gql from 'graphql-tag'
import { Config } from '@dukefun/js-ext'
import AdditionalVariables from '../../core/gql/AdditionalVariables'

export default (): any => gql`
  mutation signUp($entity: SignUpParams ${AdditionalVariables.run()}) {
    signUp(entity: $entity) {
      ...AuthFields
    }
  }
  ${Config.get(['jsAuth', 'fields'])}
`
