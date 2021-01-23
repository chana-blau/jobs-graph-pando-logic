using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Jobs_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AppController : ControllerBase
    {
        
        public AppController()
        {
        }

        [HttpGet]
        public ActionResult Welcom()
        {
            return Ok("Welcom!");
        }
    }
}
