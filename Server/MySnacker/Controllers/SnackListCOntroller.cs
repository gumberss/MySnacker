using Microsoft.AspNetCore.Mvc;
using MySnacker.Domain.Interfaces.ApplicationServices;

namespace MySnacker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SnackListController : ControllerBase
    {
        private readonly ISnackAppService _snackAppService;

        public SnackListController(ISnackAppService snackAppService)
        {
            _snackAppService = snackAppService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = _snackAppService.GetSnackList();

            return Ok(data);
        }
    }
}
