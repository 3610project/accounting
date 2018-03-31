<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="About.aspx.cs" Inherits="hsUserView.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>&nbsp;</h2>
    <h3>&nbsp;Enter Your UserName:<asp:TextBox ID="userName" runat="server"></asp:TextBox>
        <asp:Button ID="goButton" runat="server" OnClick="Butten_Click" Text="Go" />
&nbsp;<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="playerSource">
        <Columns>
            <asp:BoundField DataField="PLAYER_NAME" HeaderText="PLAYER_NAME" SortExpression="PLAYER_NAME" />
            <asp:BoundField DataField="PLAYER_USERNAME" HeaderText="PLAYER_USERNAME" SortExpression="PLAYER_USERNAME" />
            <asp:BoundField DataField="NUM_GAMES" HeaderText="NUM_GAMES" SortExpression="NUM_GAMES" />
            <asp:BoundField DataField="WIN_RATE" HeaderText="WIN_RATE" SortExpression="WIN_RATE" />
        </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="playerSource" runat="server" ConnectionString="<%$ ConnectionStrings:vShearthstoneConnectionString %>" SelectCommand="SELECT * FROM [Player_Data] WHERE ([PLAYER_USERNAME] = @PLAYER_USERNAME)">
            <SelectParameters>
                <asp:ControlParameter ControlID="userName" Name="PLAYER_USERNAME" PropertyName="Text" Type="String" />
            </SelectParameters>
        </asp:SqlDataSource>
    </h3>
</asp:Content>
