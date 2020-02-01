using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MySnacker.Domain.DTOs;
using MySnacker.Domain.Entities;
using MySnacker.Domain.Interfaces.ApplicationServices;

namespace MySnacker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RequestController : ControllerBase
    {
        private readonly IRequestAppService _requestAppService;
        private readonly IMapper _mapper;

        public RequestController(IRequestAppService requestAppService, IMapper mapper)
        {
            _requestAppService = requestAppService;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult Post([FromBody] RequestDTO requestDTO)
        {
            var request = _mapper.Map<Request>(requestDTO);

            request.RequestAdditional.ForEach(x => x.RequestId = request.Id);

            _requestAppService.Store(request);

            return Ok(requestDTO);
        }
    }
}
