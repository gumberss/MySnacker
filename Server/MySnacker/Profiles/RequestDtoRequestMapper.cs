using AutoMapper;
using MySnacker.Domain.DTOs;
using MySnacker.Domain.Entities;
using System;

namespace MySnacker.Profiles
{
    public class RequestDtoRequestMapper : Profile
    {
        public override string ProfileName => "RequestDtoRequestMapper";

        public RequestDtoRequestMapper()
        {
            CreateMap<RequestDTO, Request>()
                .ForMember(x => x.Id, x => x.MapFrom(y => Guid.NewGuid()))
                .ForMember(x => x.SnackId, x => x.MapFrom(y => y.Id))
                .ForMember(x => x.FlavorId, x => x.MapFrom(y => y.Flavor.Id))
                .ForMember(x => x.MeasureId, x => x.MapFrom(y => y.Measure.Id))
                .ForMember(x => x.Measure, x => x.Ignore())
                .ForMember(x => x.Flavor, x => x.Ignore())
                .ForMember(x => x.RequestAdditional, x => x.MapFrom(y => y.Additional));

            CreateMap<AdditionalDTO, RequestAdditional>()
                .ForMember(x => x.AdditionalId, x => x.MapFrom(y => y.Id));
        }
    }
}
