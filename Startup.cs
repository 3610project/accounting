using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(hsUserView.Startup))]
namespace hsUserView
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
