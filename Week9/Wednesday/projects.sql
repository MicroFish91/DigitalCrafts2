-- What are all projects that use JavaScript?

-- SELECT * FROM project
-- INNER JOIN project_uses_tech
-- ON project.id = project_uses_tech.project_id
-- INNER JOIN tech
-- ON project_uses_tech.tech_id = tech.id
-- WHERE tech.name = 'JavaScript';

-- What are all technologies used by the Personal Website?

-- SELECT project.name, tech.name FROM project
-- INNER JOIN project_uses_tech
-- ON project.id = project_uses_tech.project_id
-- INNER JOIN tech
-- ON project_uses_tech.tech_id = tech.id
-- WHERE project.name = 'Personal Website';

-- Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?

-- SELECT tech.id, tech.name, project_id FROM tech
-- LEFT OUTER JOIN project_uses_tech
-- ON project_uses_tech.tech_id = tech.id
-- WHERE project_id IS NULL;

-- Based on the previous query, get the count of the number of techs used by each project.

-- SELECT project.id, project.name, count(tech.id) as technum FROM project
-- INNER JOIN project_uses_tech
-- ON project.id = project_uses_tech.project_id
-- INNER JOIN tech
-- ON project_uses_tech.tech_id = tech.id
-- GROUP BY project.id;

-- Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?

-- SELECT * FROM project
-- LEFT OUTER JOIN project_uses_tech
-- ON project_uses_tech.project_id = project.id
-- WHERE tech_id IS NULL;

-- Based on the previous query, get the count of the number of projects that use each tech.

-- SELECT tech.id, tech.name, count(project.id) as projnum FROM project
-- INNER JOIN project_uses_tech
-- ON project.id = project_uses_tech.project_id
-- INNER JOIN tech
-- ON project_uses_tech.tech_id = tech.id
-- GROUP BY tech.id;

-- List all projects along with each technology used by it. You will need to do a three-way join.

-- SELECT project.id, project.name as projname, tech.name as techname FROM project
-- INNER JOIN project_uses_tech
-- ON project.id = project_uses_tech.project_id
-- INNER JOIN tech
-- ON project_uses_tech.tech_id = tech.id
-- ORDER BY project.name;

-- List all the distinct techs that are used by at least one project.

-- SELECT DISTINCT tech.name FROM tech
-- LEFT OUTER JOIN project_uses_tech
-- ON project_uses_tech.tech_id = tech.id
-- WHERE project_id is NOT NULL;

-- List all the distinct techs that are not used by any projects

-- SELECT DISTINCT tech.name FROM tech
-- LEFT OUTER JOIN project_uses_tech
-- ON project_uses_tech.tech_id = tech.id
-- WHERE project_id is NULL;

-- Order the projects by how many tech it uses.

-- SELECT project.id, project.name, count(tech.id) as technum FROM project
-- INNER JOIN project_uses_tech
-- ON project.id = project_uses_tech.project_id
-- INNER JOIN tech
-- ON project_uses_tech.tech_id = tech.id
-- GROUP BY project.id
-- ORDER BY count(tech.id);

-- What is the average number of techs used by a project?

SELECT avg(technum) FROM (
  SELECT project.id, project.name, count(tech.id) as technum FROM project
  INNER JOIN project_uses_tech
  ON project.id = project_uses_tech.project_id
  INNER JOIN tech
  ON project_uses_tech.tech_id = tech.id
  GROUP BY project.id
  ORDER BY count(tech.id)
) AS techcount;
