using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MySnacker.Application.Services;
using MySnacker.Data.Contexts;
using MySnacker.Data.Repositories;
using MySnacker.Domain.Entities;
using MySnacker.Domain.Interfaces.ApplicationServices;
using MySnacker.Domain.Interfaces.Data;
using MySnacker.Domain.ViewModels;

namespace MySnacker
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<SnackerContext>(options => options.UseSqlServer(Configuration.GetConnectionString("SnackerContext")));
            services.AddScoped<IRequestAppService, RequestAppService>();
            services.AddScoped<ISnackAppService, SnackAppService>();

            services.AddScoped<IRequestRepository, RequestRepository>();
            services.AddScoped<IFlavorRepository, FlavorRepository>();
            services.AddScoped<IMeasureRepository, MeasureRepository>();
            services.AddScoped<ISnackRepository, SnackRepository>();

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Snack, SnackData>().ReverseMap();
                cfg.CreateMap<Flavor, FlavorData>().ReverseMap();
                cfg.CreateMap<Measure, MeasureData>().ReverseMap();
            });

            IMapper mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
