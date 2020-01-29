using Microsoft.AspNetCore.Mvc;
using MySnacker.Domain.Interfaces.ApplicationServices;
using System;

namespace MySnacker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SnackController : ControllerBase
    {
        private readonly ISnackAppService _snackAppService;

        public SnackController(ISnackAppService snackAppService)
        {
            _snackAppService = snackAppService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var data = _snackAppService.GetSnackWithData(id);

            return Ok(data);
        }
    }
}
