using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using hsUserView.Classes;

namespace hsUserView
{
    public partial class login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            errorMessage.Visible = false;
        }

        protected void SqlDataSource1_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
        {

        }

        protected void go_butten_click(object sender, EventArgs e)
        {
            string szUserName = usernameInput.Text.ToLower();
            string szPlayerName = "";
            Int32 nPlayerID = -1;
            bool bAuthenticated = false;
            //SqlConnection connection = new SqlConnection("Data Source=osuwzt.database.windows.net;Initial Catalog=vShearthstone;User ID=osuwzt;Password=Wang6924");
            SqlConnection connection = new SqlConnection(DBManager.GetConnection("vShearthstoneConnectionString"));
            connection.Open();
            SqlCommand cmd = new SqlCommand("select id, player_username, player_name from PlayerData where player_username ='" + szUserName + "'", connection);
            SqlDataReader reader = cmd.ExecuteReader();
            if (reader.HasRows)
            {
                while (reader.Read() && bAuthenticated == false)
                {
                    bAuthenticated = (String.Compare(reader.GetString(reader.GetOrdinal("PLAYER_USERNAME")).ToLower(), szUserName) == 0);
                    szPlayerName = reader.GetString(reader.GetOrdinal("PLAYER_NAME"));
                    nPlayerID = reader.GetInt32(reader.GetOrdinal("ID"));
                }
            }
            
            reader.Close();
            if (bAuthenticated)
            {
                Session["userName"] = szUserName;
                Session["password"] = passwordInput.Text;
                Session["playerName"] = szPlayerName;
                Session["playerID"] = nPlayerID;
                Response.Redirect("Summary.aspx");
            }
            else
            {
                errorMessage.Visible = true;
            }
        }
    }
}