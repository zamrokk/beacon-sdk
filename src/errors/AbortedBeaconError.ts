import { BeaconError, BeaconErrorType } from '..'

export class AbortedBeaconError extends BeaconError {
  public name: string = 'UnknownBeaconError'
  public title: string = 'Aborted'

  constructor() {
    super(BeaconErrorType.ABORTED_ERROR, 'The action was aborted by the user.')
  }
}
