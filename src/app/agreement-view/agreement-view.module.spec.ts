import { AgreementViewModule } from './agreement-view.module';

describe('AgreementViewModule', () => {
  let agreementViewModule: AgreementViewModule;

  beforeEach(() => {
    agreementViewModule = new AgreementViewModule();
  });

  it('should create an instance', () => {
    expect(agreementViewModule).toBeTruthy();
  });
});
