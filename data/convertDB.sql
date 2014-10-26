--Categories :
insert into categories (id, category_name,slug,type, is_active)
SELECT idLoaiSanPham, Ten, Alias, idChungLoai, AnHien
FROM canhosaigon_new.idv_t_product
WHERE Lang = "en"
ORDER BY ThuTu
LIMIT 0 , 30

--category_type:
insert into category_type (id, type_name, slug, is_active)
SELECT idChungLoai, Ten, Alias, AnHien
FROM canhosaigon_new.idv_k_product
WHERE Lang = "en"
ORDER BY ThuTu
LIMIT 0 , 30

--Province:
INSERT INTO province( id, province_name, slug, is_active )
SELECT idProvince, Ten, Alias, AnHien
FROM canhosaigon_new.idv_search_province

--district:
insert into district(id,province_id,district_name,slug,sort,is_active)
SELECT idLoaiSanPhamCon,idLoaiSanPham,Ten,Alias,ThuTu,AnHien
FROM canhosaigon_new.idv_s_product
WHERE Lang = "en"
ORDER BY ThuTu

--cat_tag:
insert into cat_tag(id,cattag_name,slug,is_active)
SELECT idLoaiTag,Ten,Alias,AnHien
FROM canhosaigon_new.idv_t_tag
ORDER BY ThuTu
LIMIT 0 , 30

--Tag:
insert into tag(id,cattag_id,tag_name,slug,tag_title,is_active,sort)
select idTag,idLoaiTag,Ten,Alias,meta_title,AnHien,ThuTu
from canhosaigon_new.idv_tag

--Price:
insert into price(id,type,price_range,slug,sort,is_active)
SELECT idPrice,VanPhong,Ten,Alias,ThuTu,AnHien
FROM canhosaigon_new.idv_search_price

--Area:
insert into area(id,area_range,slug,sort,is_active)
select idAreaRange,Ten,Alias,ThuTu,AnHien
from canhosaigon_new.idv_search_arearange

--CatAdvs:
insert into cat_advs(id,catadv_name,is_active)
SELECT idLinkType,Ten,AnHien
FROM canhosaigon_new.`idv_link_type`
where lang = 'en'

--Advs:
insert into advs(id,cat_id,name,link,image,sort,is_active)
SELECT idLink,idLinkType,TenWebsite,Url,HinhAnh,ThuTu,AnHien
FROM canhosaigon_new.idv_link
WHERE Lang = "en"
ORDER BY ViTri, ThuTu

--project_cat:
insert into cat_project(id,cat_id,cat_name,is_active,slug)
select idLoaiTin,idTheLoai,Ten,AnHien,Alias
from canhosaigon_new.idv_t_news
WHERE Lang="en" ORDER BY ThuTu

--projects:
insert into  project (id,district_id,slug,catproject_id,project_name,project_title,project_desc,project_keyword,is_active)
SELECT idTin, idQuan, Alias, idLoaiTin, TieuDe, SeoTitle, SeoDescription, SeoKeyword, AnHien
FROM canhosaigon_new.idv_news
WHERE Lang = "en"
ORDER BY NgayDang DESC

--Real estate:
INSERT INTO real_estate( id, title, address, address_map, area_id, category_id, description, district_id, image, is_active, price, price_id,project_id, seo_desc, seo_keyword, seo_title, user_id, view_count, tags )
SELECT idSanPham, Ten, code, code, idAreaRange, idLoaiSanPham, Mota, idLoaiSanPhamCon, HinhAnh, AnHien, ProductType,idSearchPrice, ThuTu, SeoDescription, SeoKeyword, SeoTitle, idUser, SoLanXem, Tags
FROM canhosaigon_new.idv_product
WHERE Lang = "en"
ORDER BY NgayDang DESC