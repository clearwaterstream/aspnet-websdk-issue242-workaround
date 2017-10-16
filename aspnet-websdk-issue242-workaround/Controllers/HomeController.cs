using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace aspnet_websdk_issue242_workaround.Controllers
{
    public class HomeController : Controller
    {
        IActionResult Index()
        {
            return Content("Yup");
        }
    }
}
