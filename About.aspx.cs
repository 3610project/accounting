using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace hsUserView
{
    public partial class About : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            GridView1.Visible = false;
        }

        protected void Butten_Click(object sender, EventArgs e)
        {
            GridView1.Visible = true;
        }
    }
}