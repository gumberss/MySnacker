using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySnacker.Domain.Entities;
using MySnacker.Domain.Interfaces.ApplicationServices;

namespace MySnacker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RequestController : ControllerBase
    {
        private readonly IRequestAppService _requestAppService;

        public RequestController(IRequestAppService requestAppService)
        {
            _requestAppService = requestAppService;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Request request)
        {
            _requestAppService.Store(request);

            return Ok(request);
        }
    }
}
