import {CategoryData, SkillsContent} from "@/app/definitions/types";
import {StyleSheet, View} from "@react-pdf/renderer";
import SectionTitle from "@/app/components/pdf/section-title";
import SkillCategory from "@/app/components/pdf/sections/skills/skill-category";

const styles = StyleSheet.create({
    body: {
        paddingBottom: "5.8pt"
    }
})

function Skills({skills}: {skills: SkillsContent}) {
    return (
        <View style={styles.body}>
            <SectionTitle title={skills.title}/>
            {skills.categories.map((entry: CategoryData, i) => (
                <SkillCategory key={`skills-category-${i}`} category={entry}/>
            ))}
        </View>
    )
}

export default Skills;