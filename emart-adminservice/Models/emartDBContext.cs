using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace emart_adminservice.Models
{
    public partial class emartDBContext : DbContext
    {
        public emartDBContext()
        {
        }

        public emartDBContext(DbContextOptions<emartDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Addcart> Addcart { get; set; }
        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discount> Discount { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-A63MUHA\\SQLEXPRESS;Initial Catalog=emartDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Addcart>(entity =>
            {
                entity.HasKey(e => e.Cartid)
                    .HasName("PK__addcart__41663FC0AB99ABBF");

                entity.ToTable("addcart");

                entity.Property(e => e.Cartid)
                    .HasColumnName("cartid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Buyerid).HasColumnName("buyerid");

                entity.Property(e => e.Imagename)
                    .IsRequired()
                    .HasColumnName("imagename")
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Itemid).HasColumnName("itemid");

                entity.Property(e => e.Itemname)
                    .HasColumnName("itemname")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.Addcart)
                    .HasForeignKey(d => d.Buyerid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__addcart__buyerid__35BCFE0A");
            });

            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Createdatetime)
                    .HasColumnName("createdatetime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Mobilenumber)
                    .HasColumnName("mobilenumber")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.Cid)
                    .HasName("PK__Category__C1FFD861763E2496");

                entity.Property(e => e.Cid).ValueGeneratedNever();

                entity.Property(e => e.Cdet)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Cname)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discount>(entity =>
            {
                entity.HasKey(e => e.Did)
                    .HasName("PK__Discount__C0312218E419DA79");

                entity.Property(e => e.Did).ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountCode)
                    .IsRequired()
                    .HasColumnName("Discount_code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("end_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.Percentage)
                    .HasColumnName("percentage")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.StartDate)
                    .HasColumnName("start_date")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.Itemid)
                    .HasName("PK__Items__727D87934EEB087C");

                entity.Property(e => e.Itemid).ValueGeneratedNever();

                entity.Property(e => e.Imagename)
                    .HasColumnName("imagename")
                    .HasMaxLength(90)
                    .IsUnicode(false);

                entity.Property(e => e.Itemdet)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Itemname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Stocknumber).HasColumnName("stocknumber");

                entity.HasOne(d => d.C)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__Items__Cid__1920BF5C");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Sellerid)
                    .HasConstraintName("FK__Items__Sellerid__21B6055D");

                entity.HasOne(d => d.Sub)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Subid)
                    .HasConstraintName("FK__Items__Subid__1A14E395");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.HasKey(e => e.Pid)
                    .HasName("PK__Purchase__C57059389A2869D2");

                entity.Property(e => e.Pid).ValueGeneratedNever();

                entity.Property(e => e.Buyerid).HasColumnName("buyerid");

                entity.Property(e => e.Datetime).HasColumnType("datetime");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Sellerid).HasColumnName("sellerid");

                entity.Property(e => e.TransactionType)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Transactionstatus)
                    .HasColumnName("transactionstatus")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Buyerid)
                    .HasConstraintName("FK__PurchaseH__buyer__1CF15040");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Itemid)
                    .HasConstraintName("FK__PurchaseH__Itemi__1ED998B2");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Sellerid)
                    .HasConstraintName("FK__PurchaseH__selle__1DE57479");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Brief)
                    .HasColumnName("brief")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .HasColumnName("companyname")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .HasColumnName("GSTIN")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Mobilenumber)
                    .HasColumnName("mobilenumber")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Postaladdress)
                    .HasColumnName("postaladdress")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .HasColumnName("website")
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasKey(e => e.Subid)
                    .HasName("PK__SubCateg__4D98A472798E54DE");

                entity.Property(e => e.Subid).ValueGeneratedNever();

                entity.Property(e => e.Gst)
                    .HasColumnName("GST")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Subdet)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Subname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.C)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__SubCategory__Cid__164452B1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
