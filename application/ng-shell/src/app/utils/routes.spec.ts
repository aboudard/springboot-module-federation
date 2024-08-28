import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { buildRoutes } from './routes';

describe('buildRoutes', () => {
	const mockManifest = {
		remoteApp1: {
			routePath: 'remote1',
			displayName: 'Remote App 1',
			remoteEntry: 'http://localhost:4201/remoteEntry.js',
			exposedModule: './Module',
			routes: 'RemoteApp1Module',
			type: 'module' as const,
			ngModuleName: 'RemoteApp1Module'
		},
		remoteApp2: {
			routePath: 'remote2',
			displayName: 'Remote App 2',
			remoteEntry: 'http://localhost:4202/remoteEntry.js',
			exposedModule: './Module',
			routes: 'RemoteApp2Module',
			type: 'module' as const,
			ngModuleName: 'RemoteApp2Module'
		}
	};

	it('should build routes correctly', async () => {
		const routes: Routes = buildRoutes(mockManifest);

		expect(routes.length).toBe(APP_ROUTES.length + 2);

		const remote1Route = routes.find(route => route.path === 'remote1');
		const remote2Route = routes.find(route => route.path === 'remote2');

		expect(remote1Route).toBeTruthy();
		expect(remote1Route?.title).toBe('Remote App 1');
		expect(remote1Route?.loadChildren).toBeDefined();

		expect(remote2Route).toBeTruthy();
		expect(remote2Route?.title).toBe('Remote App 2');
		expect(remote2Route?.loadChildren).toBeDefined();

	});
});