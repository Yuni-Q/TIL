
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
