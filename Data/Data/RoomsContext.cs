using Microsoft.EntityFrameworkCore;
using ReactRoom.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactRoom.Data.Data
{
    public class RoomsContext : DbContext
    {
        public RoomsContext(DbContextOptions<RoomsContext> options) : base(options)
        {

        }

        public DbSet<Room> Room { get; set; }
    }
}
