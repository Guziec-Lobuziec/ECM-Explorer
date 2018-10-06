import { SidepanelViewModule } from './sidepanel-view.module';

describe('SidepanelViewModule', () => {
  let sidepanelViewModule: SidepanelViewModule;

  beforeEach(() => {
    sidepanelViewModule = new SidepanelViewModule();
  });

  it('should create an instance', () => {
    expect(sidepanelViewModule).toBeTruthy();
  });
});
