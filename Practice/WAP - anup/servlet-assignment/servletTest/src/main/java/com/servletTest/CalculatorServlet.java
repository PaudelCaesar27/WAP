package com.servletTest;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class CalculatorServlet extends HttpServlet
{
    Integer num1, num2, num3, num4, sum, product;
    @Override
    public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
       if(isInteger(req.getParameter("sumNum1")))
           num1 = Integer.parseInt(req.getParameter("sumNum1"));

       if(isInteger(req.getParameter("sumNum2")))
           num2 = Integer.parseInt(req.getParameter("sumNum2"));

       if(isInteger(req.getParameter("mulNum1")))
            num3 = Integer.parseInt(req.getParameter("mulNum1"));

       if(isInteger(req.getParameter("mulNum2")))
            num4 = Integer.parseInt(req.getParameter("mulNum2"));

        //sum
        if(num1 != null && num2 != null){
            sum = num1 + num2;
        }
        //multiply
        if(num3 != null && num4 != null){
            product = num3 * num4;
        }
        makePage(res, num1, num2, num3, num4, sum, product);
    }

    public boolean isInteger(String string) {
        try {
            Integer.valueOf(string);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private void makePage(HttpServletResponse res, Integer snum1, Integer snum2, Integer mnum1, Integer mnum2, Integer sum, Integer multiply) throws IOException {
        PrintWriter out = res.getWriter();
        out.println("<html><body>");
    out.println("<form action=\"calculate\">");
    out.println("<input id=\"num1\" name=\"sumNum1\" value ="+snum1+"> +\n" +
            "                <input id=\"num2\" name=\"sumNum2\" value="+snum2+"> =\n" +
            "    <input id=\"sumResult\" name=\"sumResult\" value="+sum+"><br/>");
    out.println("    <input id=\"num3\" name=\"mulNum1\" value="+mnum1+">*\n" +
            "    <input id=\"num4\" name=\"mulNum2\" value="+mnum2+"> =\n" +
            "    <input id=\"mulResult\" name=\"mulResult\" value="+product+">\n" +
            "    <br/>");
    out.println("<input type=\"submit\"/>");
    out.println("</form>\n" +
            "</body>\n" +
            "</html>");
    }
}