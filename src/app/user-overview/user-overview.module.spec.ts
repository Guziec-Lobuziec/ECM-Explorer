import { UserOverviewModule } from './user-overview.module';

describe('UserOverviewModule', () => {
  let userOverviewModule: UserOverviewModule;

  beforeEach(() => {
    userOverviewModule = new UserOverviewModule();
  });

  it('should create an instance', () => {
    expect(userOverviewModule).toBeTruthy();
  });
});
