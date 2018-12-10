import { AgreementCreatorModule } from './agreement-creator.module';

describe('AgreementCreatorModule', () => {
  let agreementCreatorModule: AgreementCreatorModule;

  beforeEach(() => {
    agreementCreatorModule = new AgreementCreatorModule();
  });

  it('should create an instance', () => {
    expect(agreementCreatorModule).toBeTruthy();
  });
});
