using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Jobs_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobsController : ControllerBase
    {
        
        public JobsController()
        {
        }
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public string Get()
        {
            string path = Path.GetFullPath(Environment.CurrentDirectory+"/App_Data/Data.json");
            return System.IO.File.ReadAllText(path);
        }
    }
}
