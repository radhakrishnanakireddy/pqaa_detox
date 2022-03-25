import { BeforeAll, Before, AfterAll, After } from '@cucumber/cucumber';
import { init, cleanup } from 'detox';
import { detox as config } from '../../../package.json';

BeforeAll({ timeout: 60 * 1000 }, async () => {
    await init(config);
});

Before(async () => {
    await device.reverseTcpPort(8081)
    await device.launchApp({ newInstance: true });
});

AfterAll(async () => {
    await device.uninstallApp()
    await cleanup();
});