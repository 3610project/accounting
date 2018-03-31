<%@ Page Title="Details" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Details.aspx.cs" Inherits="hsUserView.Details" %>

<%@ Register assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI.DataVisualization.Charting" tagprefix="asp" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
        
    <asp:Image ID="loginlogo" runat="server" Height="86px" ImageUrl="~/pictures/logo.png" Width="392px" />
    <div>

        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:vShearthstoneConnectionString %>" SelectCommand="select [hero], [hero_deck], count(*) as [C] from [GameData] where [player_id] = @playerID group by [hero_deck], [hero] order by 3 desc">    
            <SelectParameters>
                <asp:SessionParameter Name="PlayerID" SessionField="playerID" DefaultValue="0" />
            </SelectParameters>
        </asp:SqlDataSource>
        <asp:Button ID="Button1" runat="server" Text="Summary" OnClick="summary_button_click" />
        <asp:Button ID="Button2" runat="server" BorderStyle="Solid" Font-Bold="True" Text="Details" />
        <asp:Button ID="Button3" runat="server" OnClick="history_button_click" Text="History" />
        <br />
        <br />
        <asp:GridView ID="GridView1" runat="server" AllowPaging="True" AutoGenerateColumns="False" CellPadding="4" DataSourceID="SqlDataSource1" ForeColor="#333333" GridLines="None">
            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
            <Columns>
                <asp:BoundField DataField="hero" HeaderText="Class" SortExpression="hero" />
                <asp:BoundField DataField="hero_deck" HeaderText="Deck" SortExpression="hero_deck" />
                <asp:BoundField DataField="C" HeaderText="Count" ReadOnly="True" SortExpression="C" />
            </Columns>
            <EditRowStyle BackColor="#999999" />
            <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
            <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
            <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
            <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
            <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
            <SortedAscendingCellStyle BackColor="#E9E7E2" />
            <SortedAscendingHeaderStyle BackColor="#506C8C" />
            <SortedDescendingCellStyle BackColor="#FFFDF8" />
            <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
        </asp:GridView>
        <br />


    </div>
    

</asp:Content>
