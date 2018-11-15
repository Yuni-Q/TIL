
# Group Concat

## 기존 생각
```javascript
const bgms = await models.bgms.findAll({});
bgms.forEach(async bgm => {
  bgm.category = [];
  const bgmRelations = await models.bgmRelations.findAll({
    where: {
      bgm_id: bgm.id,
    }
  });
  bgmRelations.forEach(async bgmRelation => {
    const bgmCategoryName = await models.bgmCategories.findOne({
      where: {
        id: bgmRelation.bgm_category_id,
      }
    })
    bgm.category.push(bgmCategoryName.name);
  })
})
```

## 개선안
```query
select 
*,
GROUP_CONCAT(bgm_categories.name SEPARATOR ',') as name
from bgms 
left outer join  bgm_relations on bgms.id = bgm_relations.bgm_id
left outer join bgm_categories on bgm_relations.bgm_category_id = bgm_categories.id
group by bgms.id;
```
> explan으로 사양도 확인해 봅시다 !!  

```javascript
const query = `
    select 
    bgms.id,
    bgms.name,
    bgms.artist,
    bgms.created_at,
    bgms.updated_at,
    bgms.content,
    bgms.visible,
    GROUP_CONCAT(bgm_categories.name SEPARATOR ',') as category_name
    from bgms 
    left outer join  bgm_relations on bgms.id = bgm_relations.bgm_id
    left outer join bgm_categories on bgm_relations.bgm_category_id = bgm_categories.id
    group by bgms.id;
  `
const bgms = await models.sequelize.query(query, { type: models.sequelize.QueryTypes.SELECT });
res.json(bgms);
```
> workbench에서 괜찮았지만 서버에서는 중복이름이 문제가 되었습니다.  
