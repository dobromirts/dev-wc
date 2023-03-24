import { expect } from '@open-wc/testing';
import MasterView1 from './master-view1.js';

describe('MasterView1', () => {
  it('<app-master-view1> is an instance of MasterView1', async () => {
    const element = document.createElement('app-master-view1');
    expect(element).to.be.instanceOf(MasterView1);
  });
});
