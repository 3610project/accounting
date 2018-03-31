<%@ Page Title="History" MasterPageFile="~/Site.Master" Language="C#" AutoEventWireup="true" CodeBehind="History.aspx.cs" Inherits="hsUserView.History" %>

<%@ Register assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI.DataVisualization.Charting" tagprefix="asp" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
        
    <asp:Image ID="loginlogo" runat="server" Height="86px" ImageUrl="~/pictures/logo.png" Width="392px" />
    <div>

        <asp:SqlDataSource 
            ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:vShearthstoneConnectionString %>" 
            SelectCommand=  "SELECT [hero], [hero_deck], [opponent], [opponent_deck], [duration], [rank], [region], [dr] as [week], [win], [played_date] 
                            FROM [GameData] WHERE ([player_id] = @PlayerID)">
            <SelectParameters>
                <asp:SessionParameter Name="PlayerID" SessionField="playerID" DefaultValue="0" />
            </SelectParameters>
        </asp:SqlDataSource>

        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:vShearthstoneConnectionString %>"
            OnSelecting="SqlDataSource2_Selecting"
            SelectCommand=  "SELECT [hero], [hero_deck], [opponent], [opponent_deck], [duration], [rank], [region], [dr] as [week], [win], [played_date]
                            FROM [GameData] WHERE (([dr] = @GAME_WEEK) AND ([player_id] = @PlayerID))">
            <SelectParameters>
                <asp:ControlParameter ControlID="selectTimeFrame" DefaultValue="" Name="GAME_WEEK" PropertyName="SelectedValue" Type="Double" />
                <asp:SessionParameter Name="PlayerID" SessionField="playerID" DefaultValue="0" />
            </SelectParameters>
        </asp:SqlDataSource>
        <asp:Button ID="Button2" runat="server" OnClick="summary_button_click" Text="Summary" />
        <asp:Button ID="Button3" runat="server" OnClick="details_button_click" Text="Details" />
        <asp:Button ID="Button4" runat="server" BorderStyle="Solid" Font-Bold="True" Text="History" />
        <br />
        <br />
        <asp:Label ID="Label1" runat="server" Text="Select Time Frame: "></asp:Label>
        <asp:DropDownList ID="selectTimeFrame" runat="server">
            <asp:ListItem Selected="True" Value="0">No Selection</asp:ListItem>
            <asp:ListItem Value="39">Last Week</asp:ListItem>
            <asp:ListItem Value="A">All Time</asp:ListItem>
        </asp:DropDownList>
&nbsp;<asp:Button ID="Button1" runat="server" OnClick="Select_Item" Text="Go" />
        <br />
        <br />
        <asp:GridView ID="DataGrid" runat="server" AllowPaging="True" AutoGenerateColumns="False" CellPadding="4" ForeColor="#333333" GridLines="None" Visible="True">
            <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
            <Columns>
                <asp:BoundField DataField="hero" HeaderText="Your Class" SortExpression="hero" />
                <asp:BoundField DataField="hero_deck" HeaderText="Your Deck" SortExpression="hero_deck" />
                <asp:BoundField DataField="opponent" HeaderText="Opponent's Class" SortExpression="opponent" />
                <asp:BoundField DataField="opponent_deck" HeaderText="Opponent's Deck" SortExpression="opponent_deck" />
                <asp:BoundField DataField="duration" HeaderText="Game Duration" SortExpression="duration" />
                <asp:BoundField DataField="rank" HeaderText="Your Rank" SortExpression="rank" />
                <asp:BoundField DataField="region" HeaderText="Region" SortExpression="region" />
                <asp:BoundField DataField="played_date" HeaderText="Date" SortExpression="played_date" />
                <asp:BoundField DataField="week" HeaderText="Week #" SortExpression="week" />
                <asp:BoundField DataField="win" HeaderText="Result" SortExpression="win" />
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

    </div>
    

</asp:Content>