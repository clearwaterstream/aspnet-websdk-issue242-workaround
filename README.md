# aspnet/websdk issue 242 workaround

remove -argFile IISExeLauncherArgs.txt from web.config so that the app can be deployed

https://github.com/aspnet/websdk/issues/242

If you have an ASP.NET Core 2.0 app that is running under IIS and you have it setup locally (in Visual Studio 2017) to debug / run under IIS (vs IISExpress) then Visual Studio will add the following line to web.config:

`<aspNetCore processPath="bin\IISSupport\VSIISExeLauncher.exe" arguments="-argFile IISExeLauncherArgs.txt" forwardWindowsAuthToken="false" stdoutLogEnabled="false" />`

When you publish the app, the `processPath` will auto-magically be changed to the app's exe, while the `arguments` attribute will remain. This will cause an issue and your app will fail to start, giving you a 502.5 error.

The workaround involved removing the `arguments` variable post web.config transformation during publish. See `csproj` file for the kick-off of the task, and the `gulpfile_publish.js` that's doing the removal.

You can test this out by running the `local_test` publish job. You need yarn and gulp installed.
