// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.

import { View, Text, Image, StyleSheet, Platform } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

// TODO STEP 5: Define the color palette.
const COLORS = {
  background: '#EEF1F6',
  card: '#FFFFFF',
  text: '#1E293B',
  muted: '#64748B',
  primary: '#4F46E5',
  primaryLight: '#EEF2FF',
  border: '#E2E8F0',
  online: '#22C55E',
};

export default function App() {
  return (
    // TODO STEP 1: Create the main screen and profile card.
    <View style={styles.screen}>
      <View style={styles.card}>

        {/* TODO STEP 2: Add the banner. */}
        <Image
          style={styles.banner}
          source={require('./assets/banner.png')}
          resizeMode="cover"
        />

        <View style={styles.content}>

          {/* TODO STEP 3: Create the header row. */}
          <View style={styles.headerRow}>

            {/* TODO STEP 2: Add the avatar. */}
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={require('./assets/avatar.png')}
                resizeMode="cover"
              />

              {/* TODO STEP 4: Add the online badge. */}
              <View style={styles.onlineBadge} />
            </View>

            {/* STEP 1: Add the profile information. */}
            <View style={styles.headerText}>
              <Text style={styles.name}>Giovanni Pasillas</Text>
              <Text style={styles.role}>Developer</Text>
              <Text style={styles.location}>Jalisco, MX</Text>
              <Text style={styles.name}>Pending</Text>
            </View>
          </View>

          {/* STEP 1: Add the bio. */}
          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>

          {/* TODO STEP 3: Create the stats row using map(). */}
          <View style={styles.statsRow}>
            {STATS.map((item, index) => (
              <View
                key={item.label}
                style={[
                  styles.stat,
                  index < STATS.length - 1 && styles.statDivider,
                ]}
              >
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={styles.statLabel}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* TODO STEP 4: Create the skill tags using map(). */}
          <View style={styles.skillsSection}>
            <Text style={styles.skillsTitle}>Skills</Text>

            <View style={styles.tags}>
              {SKILLS.map((skill) => (
                <View key={skill} style={styles.tag}>
                  <Text style={styles.tagText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* TODO STEP 4: Add the action buttons. */}
          <View style={styles.actions}>
            <View style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </View>

            <View style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}

// TODO STEP 5: Polish the styles.
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
      default: {},
    }),
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  banner: {
    width: '100%',
    height: 120,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -48,
    marginBottom: 18,
  },

  avatarContainer: {
    width: 96,
    height: 96,
    position: 'relative',
    marginRight: 14,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: COLORS.card,
  },

  headerText: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 3,
  },

  role: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 4,
  },

  location: {
    fontSize: 13,
    color: COLORS.muted,
  },

  bio: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.text,
    marginBottom: 20,
  },

  statsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 16,
    marginBottom: 20,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statDivider: {
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },

  statLabel: {
    fontSize: 11,
    color: COLORS.muted,
  },

  onlineBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.online,
    borderWidth: 3,
    borderColor: COLORS.card,
  },

  skillsSection: {
    marginBottom: 22,
  },

  skillsTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.muted,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  tag: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },

  actions: {
    flexDirection: 'row',
    gap: 12,
  },

  followButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
  },

  followButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.card,
  },

  messageButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.card,
  },

  messageButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
});