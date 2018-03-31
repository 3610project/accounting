using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

namespace hsUserView.Classes
{
    public class DBManager
    {
        public static string GetConnection(string szConnectionName)
        {
            ConnectionStringSettings cSetting = ConfigurationManager.ConnectionStrings[szConnectionName];
            if (cSetting == null || string.IsNullOrEmpty(cSetting.ConnectionString))
            {
                throw new Exception("Fatal Error: Missing connection name in web.config file");
            }
            return cSetting.ConnectionString;
        }
    }

}