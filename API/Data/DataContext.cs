using API.Models;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    //Utilizar o EF para nossa aplicação
    public class DataContext : DbContext
    {
        //Construtor para definir como será conectado com o BD
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        //Lista de propriedades que vão definir quais classes vão virar tabelas do BD
        public DbSet<Produto> Produtos { get; set; }
    }
}