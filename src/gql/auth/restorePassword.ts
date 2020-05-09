import gql from 'graphql-tag'
import { Config } from '@dukefun/js-ext'
import AdditionalVariables from '../../core/gql/AdditionalVariables'

export default (): any => gql`
  mutation restorePassword($entity: RestoreParams, $deviceUuid: String ${AdditionalVariables.run()}) {
    restorePassword(entity: $entity, deviceUuid: $deviceUuid) {
      ...AuthFields
    }
  }
  ${Config.get(['jsAuth', 'fields'])}
`
