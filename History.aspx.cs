using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace hsUserView
{
    public partial class History : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string userName = (string)(Session["userName"]);
            string playerName = (string)(Session["playerName"]);
        }

        protected void Select_Item(object sender, EventArgs e)
        {
            if (selectTimeFrame.SelectedValue == "A")
            {
                DataGrid.DataSourceID = "SqlDataSource1";
                DataGrid.Visible = true;
            }

            else if (selectTimeFrame.SelectedValue == "39")
            {
                DataGrid.DataSourceID = "SqlDataSource2";
                DataGrid.Visible = true;
            }

            else if (selectTimeFrame.SelectedValue == "0")
            {
                DataGrid.Visible = false;
            }

            else
            {

            }
        }

        protected void SqlDataSource2_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
        {

        }

        protected void summary_button_click(object sender, EventArgs e)
        {
            Response.Redirect("Summary.aspx");
        }

        protected void details_button_click(object sender, EventArgs e)
        {
            Response.Redirect("Details.aspx");
        }
    }
}